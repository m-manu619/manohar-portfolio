import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { Plus, RotateCcw, Sparkles } from 'lucide-react';

const SKILLS_POOL = [
  'React', 'Python', 'Next.js', 'Spring Boot', 'AWS',
  'Docker', 'Jenkins', 'Terraform', 'FastAPI', 'Tailwind CSS',
  'Framer Motion', 'PostgreSQL', 'MySQL', 'DynamoDB', 'WebSockets',
  'Vite', 'GSAP', 'Git', 'GitHub', 'Machine Learning', 'spaCy',
  'Elasticsearch', 'Redis', 'Nginx', 'Kubernetes', 'Serverless'
];

export default function GravitySandbox() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Simulation states
  const [gravity, setGravity] = useState(6); // -10 to 10
  const [bounciness, setBounciness] = useState(0.6); // 0 to 1
  const [friction, setFriction] = useState(0.1); // 0 to 1
  const [customText, setCustomText] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  // Refs for physics engine instances
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const bodiesMapRef = useRef([]); // tracks { id, body, name, width, height }
  const boundariesRef = useRef({}); // floor, ceiling, left, right

  // Prepopulate initial tags on mount
  useEffect(() => {
    const initial = SKILLS_POOL.slice(0, 15).map((name, index) => ({
      id: `tag-${index}-${Date.now()}`,
      name,
    }));
    setActiveTags(initial);
  }, []);

  // Initialize and update Physics Simulation
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current || activeTags.length === 0) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // Matter-js modules
    const { Engine, World, Bodies, Mouse, MouseConstraint, Runner, Body } = Matter;

    // 1. Create Engine & Runner
    const engine = Engine.create({
      gravity: { y: gravity / 10, x: 0 },
    });
    engineRef.current = engine;

    const runner = Runner.create();
    runnerRef.current = runner;

    // 2. Create boundaries (very thick to prevent clipping)
    const wallThickness = 100;
    const floor = Bodies.rectangle(width / 2, height + wallThickness / 2, width * 2, wallThickness, { isStatic: true });
    const ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, width * 2, wallThickness, { isStatic: true });
    const leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { isStatic: true });

    boundariesRef.current = { floor, ceiling, leftWall, rightWall };
    World.add(engine.world, [floor, ceiling, leftWall, rightWall]);

    // 3. Create bodies for each tag
    const tempBodiesMap = [];
    activeTags.forEach((tag, idx) => {
      // Estimate tag sizes: 8px per character + padding
      const tagWidth = tag.name.length * 8 + 36;
      const tagHeight = 36;

      // Spawn items in a grid layout at the top half of the screen
      const cols = Math.max(2, Math.floor(width / 160));
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = 80 + col * (width / cols) + (Math.random() - 0.5) * 15;
      const y = 80 + row * 60 + (Math.random() - 0.5) * 10;

      const body = Bodies.rectangle(x, y, tagWidth, tagHeight, {
        restitution: bounciness,
        friction,
        frictionAir: 0.02,
        density: 0.001,
      });

      // Give tags a tiny initial random spin/torque
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      tempBodiesMap.push({
        id: tag.id,
        body,
        name: tag.name,
        width: tagWidth,
        height: tagHeight,
      });
    });

    bodiesMapRef.current = tempBodiesMap;
    World.add(engine.world, tempBodiesMap.map((item) => item.body));

    // 4. Set up Mouse & Drag constraint
    const mouse = Mouse.create(canvasRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    World.add(engine.world, mouseConstraint);

    // Keep mouse in sync on scroll/drag
    canvasRef.current.addEventListener('wheel', mouse.mousewheel, { passive: true });

    // 5. Start Physics loop
    Runner.run(runner, engine);

    // 6. Bind DOM update tick
    let animationFrameId;
    const updateDOM = () => {
      tempBodiesMap.forEach((item) => {
        const domElement = document.getElementById(item.id);
        if (domElement) {
          const { x, y } = item.body.position;
          const angle = item.body.angle;
          // Apply centering offset for absolute position matching
          domElement.style.transform = `translate3d(${x - item.width / 2}px, ${y - item.height / 2}px, 0px) rotate(${angle}rad)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateDOM);
    };

    updateDOM();

    // 7. Dynamic Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight || 500;

      // Update static wall positions
      Body.setPosition(floor, { x: newWidth / 2, y: newHeight + wallThickness / 2 });
      Body.setPosition(ceiling, { x: newWidth / 2, y: -wallThickness / 2 });
      Body.setPosition(leftWall, { x: -wallThickness / 2, y: newHeight / 2 });
      Body.setPosition(rightWall, { x: newWidth + wallThickness / 2, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup simulation on rebuild
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      Runner.stop(runner);
      Engine.clear(engine);
      World.clear(engine.world, false);
    };
  }, [activeTags]); // eslint-disable-line react-hooks/exhaustive-deps

  // Synchronize Live Gravity Slider Changes
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.gravity.y = gravity / 10;
    }
  }, [gravity]);

  // Synchronize Restitution (Bounciness) Slider Changes
  useEffect(() => {
    if (engineRef.current && bodiesMapRef.current.length > 0) {
      bodiesMapRef.current.forEach((item) => {
        Matter.Body.set(item.body, 'restitution', bounciness);
      });
    }
  }, [bounciness]);

  // Synchronize Friction Slider Changes
  useEffect(() => {
    if (engineRef.current && bodiesMapRef.current.length > 0) {
      bodiesMapRef.current.forEach((item) => {
        Matter.Body.set(item.body, 'friction', friction);
      });
    }
  }, [friction]);

  // Spawns a new tag into the sandbox
  const spawnTag = (name) => {
    const cleanName = name.trim();
    if (!cleanName) return;

    const newTag = {
      id: `tag-spawn-${Date.now()}-${Math.random()}`,
      name: cleanName,
    };
    setActiveTags((prev) => [...prev, newTag]);
  };

  // Spawns a random tag from predefined pool
  const spawnRandomTag = () => {
    const randomIndex = Math.floor(Math.random() * SKILLS_POOL.length);
    spawnTag(SKILLS_POOL[randomIndex]);
  };

  // Triggers random re-distribution / drop
  const resetSandbox = () => {
    if (engineRef.current && bodiesMapRef.current.length > 0) {
      const container = containerRef.current;
      const width = container.clientWidth;

      bodiesMapRef.current.forEach((item, idx) => {
        const cols = Math.max(2, Math.floor(width / 160));
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const x = 80 + col * (width / cols) + (Math.random() - 0.5) * 15;
        const y = 80 + row * 60 + (Math.random() - 0.5) * 10;

        Matter.Body.setPosition(item.body, { x, y });
        Matter.Body.setVelocity(item.body, { x: 0, y: 0 });
        Matter.Body.setAngularVelocity(item.body, (Math.random() - 0.5) * 0.05);
      });
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customText.trim()) {
      spawnTag(customText);
      setCustomText('');
    }
  };

  return (
    <div className="gravity-section-wrapper" ref={containerRef}>
      {/* Canvas container for capturing drags */}
      <canvas className="gravity-canvas" ref={canvasRef} />

      {/* Render DOM nodes for pixel-perfect styled badges */}
      {bodiesMapRef.current.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className="gravity-tag"
          style={{
            width: `${item.width}px`,
            height: `${item.height}px`,
            lineHeight: `${item.height}px`,
          }}
        >
          <Sparkles size={12} className="gravity-tag-icon" />
          <span>{item.name}</span>
        </div>
      ))}

      {/* Apple-style translucent floating controls */}
      <div className="gravity-toolbar">
        <div className="toolbar-header">
          <span className="toolbar-title">Interactive Gravity Playground</span>
          <button type="button" className="toolbar-btn" onClick={resetSandbox} title="Reset physics elements">
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <div className="toolbar-controls-grid">
          <div className="control-field">
            <label>Gravity</label>
            <div className="slider-wrapper">
              <input
                type="range"
                min="-10"
                max="10"
                step="0.5"
                value={gravity}
                onChange={(e) => setGravity(parseFloat(e.target.value))}
              />
              <span className="control-value">{gravity > 0 ? `+${gravity}` : gravity}</span>
            </div>
          </div>

          <div className="control-field">
            <label>Bounciness</label>
            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={bounciness}
                onChange={(e) => setBounciness(parseFloat(e.target.value))}
              />
              <span className="control-value">{Math.round(bounciness * 100)}%</span>
            </div>
          </div>

          <div className="control-field">
            <label>Friction</label>
            <div className="slider-wrapper">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={friction}
                onChange={(e) => setFriction(parseFloat(e.target.value))}
              />
              <span className="control-value">{Math.round(friction * 100)}%</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleCustomSubmit} className="toolbar-actions">
          <div className="input-group">
            <input
              type="text"
              placeholder="Custom tag..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="toolbar-input"
              maxLength={18}
            />
            <button type="submit" className="toolbar-btn toolbar-btn-add">
              <Plus size={14} /> Add
            </button>
          </div>
          <button type="button" className="toolbar-btn button-spawn-random" onClick={spawnRandomTag}>
            <Sparkles size={13} /> Spawn Skill
          </button>
        </form>
      </div>
    </div>
  );
}
