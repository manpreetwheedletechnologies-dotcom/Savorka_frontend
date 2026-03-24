import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ─────────────────────────────────────────────
   LOGO POINT DATA  (300×300 grid)
───────────────────────────────────────────── */
const OUTER_PTS =
    "152,4 161,5 166,6 171,7 174,8 178,9 181,10 184,11 186,12 188,13 191,14 193,15 194,16 196,17 198,18 199,19 201,20 203,21 204,22 205,23 207,24 208,25 209,26 210,27 211,28 212,29 214,30 215,31 216,32 217,33 218,34 219,35 220,36 221,37 221,38 222,39 223,40 224,41 225,42 225,43 226,44 227,45 228,46 228,47 229,48 230,49 231,50 231,51 232,52 233,53 233,54 234,55 234,56 235,57 235,58 236,59 236,60 237,61 237,62 238,63 238,64 238,65 238,66 238,67 238,68 238,69 238,70 238,71 238,72 238,73 238,74 238,75 237,76 237,77 236,78 236,79 235,80 234,81 234,82 233,83 232,84 231,85 229,86 227,87 224,88 161,89 161,90 161,91 162,92 162,93 162,94 163,95 163,96 164,97 164,98 165,99 166,100 166,101 167,102 168,103 168,104 169,105 170,106 171,107 172,108 173,109 173,110 174,111 175,112 176,113 178,114 179,115 180,116 182,117 183,118 185,119 186,120 187,121 189,122 191,123 193,124 195,125 197,126 199,127 201,128 204,129 206,130 208,131 210,132 211,133 213,134 214,135 216,136 217,137 218,138 219,139 221,140 221,141 222,142 223,143 224,144 225,145 226,146 227,147 227,148 228,149 229,150 230,151 230,152 231,153 232,154 233,155 233,156 233,157 234,158 234,159 235,160 236,161 236,162 237,163 237,164 238,165 238,166 238,167 239,168 239,169 240,170 240,171 241,172 241,173 241,174 242,175 242,176 242,177 243,178 243,179 243,180 243,181 244,182 244,183 244,184 244,185 244,186 245,187 245,188 245,189 245,190 245,191 245,192 245,193 245,194 245,195 245,196 245,197 245,198 245,199 245,200 245,201 245,202 245,203 245,204 245,205 245,206 245,207 245,208 245,209 245,210 245,211 245,212 245,213 245,214 245,215 245,216 244,217 244,218 244,219 244,220 244,221 243,222 243,223 243,224 243,225 242,226 242,227 242,228 241,229 241,230 241,231 240,232 240,233 239,234 239,235 239,236 238,237 238,238 237,239 237,240 236,241 236,242 235,243 235,244 234,245 234,246 233,247 233,248 233,249 232,250 231,251 230,252 230,253 229,254 228,255 227,256 227,257 226,258 225,259 224,260 223,261 223,262 222,263 221,264 220,265 219,266 218,267 217,268 216,269 215,270 214,271 212,272 211,273 210,274 209,275 208,276 207,277 205,278 204,279 202,280 201,281 199,282 197,283 196,284 193,285 191,286 190,287 187,288 185,289 182,290 179,291 176,292 172,293 168,294 161,295 139,295 133,294 128,293 124,292 121,291 118,290 115,289 113,288 111,287 109,286 107,285 105,284 103,283 101,282 100,281 98,280 97,279 95,278 94,277 93,276 92,275 90,274 89,273 88,272 87,271 86,270 85,269 84,268 83,267 82,266 81,265 80,264 79,263 78,262 78,261 77,260 76,259 75,258 74,257 74,256 73,255 72,254 71,253 71,252 70,251 69,250 69,249 68,248 67,247 66,246 66,245 66,244 65,243 65,242 64,241 64,240 63,239 63,238 62,237 62,236 62,235 61,234 61,233 61,232 61,231 61,230 61,229 61,228 61,227 61,226 61,225 61,224 62,223 62,222 63,221 63,220 64,219 65,218 65,217 66,216 67,215 69,214 71,213 73,212 142,211 142,210 141,209 141,208 140,207 140,206 139,205 139,204 138,203 138,202 137,201 137,200 136,199 136,198 135,197 134,196 133,195 132,194 131,193 130,192 130,191 129,190 128,189 127,188 126,187 124,186 123,185 122,184 120,183 119,182 117,181 116,180 114,179 112,178 110,177 108,176 105,175 103,174 100,173 97,172 95,171 93,170 91,169 89,168 88,167 86,166 85,165 83,164 82,163 81,162 80,161 79,160 78,159 77,158 76,157 75,156 75,155 74,154 73,153 72,152 71,151 71,150 70,149 69,148 69,147 68,146 67,145 67,144 66,143 66,142 65,141 65,140 64,139 64,138 63,137 63,136 62,135 62,134 61,133 61,132 60,131 60,130 60,129 59,128 59,127 58,126 58,125 58,124 57,123 57,122 57,121 57,120 56,119 56,118 56,117 56,116 55,115 55,114 55,113 55,112 55,111 54,110 54,109 54,108 54,107 54,106 54,105 54,104 54,103 54,102 54,101 54,100 54,99 54,98 54,97 54,96 54,95 54,94 54,93 54,92 54,91 54,90 54,89 54,88 54,87 54,86 55,85 55,84 55,83 55,82 55,81 56,80 56,79 56,78 56,77 57,76 57,75 57,74 58,73 58,72 58,71 59,70 59,69 59,68 60,67 60,66 61,65 61,64 61,63 62,62 62,61 63,60 63,59 64,58 64,57 65,56 65,55 66,54 66,53 67,52 67,51 68,50 69,49 69,48 70,47 71,46 71,45 72,44 73,43 74,42 75,41 75,40 76,39 77,38 78,37 78,36 79,35 80,34 81,33 82,32 83,31 85,30 86,29 87,28 88,27 89,26 90,25 92,24 93,23 94,22 96,21 98,20 99,19 101,18 102,17 104,16 106,15 108,14 110,13 113,12 115,11 118,10 121,9 124,8 127,7 131,6 137,5 144,4";

const INNER_PTS =
    "143,41 139,42 135,43 132,44 130,45 128,46 126,47 125,48 123,49 122,50 120,51 119,52 118,53 117,54 116,55 115,56 114,57 113,58 113,59 112,60 111,61 111,62 110,63 109,64 109,65 108,66 108,67 107,68 107,69 106,70 106,71 106,72 105,73 105,74 105,75 104,76 104,77 104,78 104,79 103,80 103,81 103,82 103,83 103,84 103,85 102,86 102,87 102,88 102,89 102,90 102,91 102,92 102,93 102,94 102,95 102,96 103,97 103,98 103,99 103,100 103,101 103,102 103,103 104,104 104,105 104,106 104,107 105,108 105,109 105,110 105,111 106,112 106,113 106,114 107,115 107,116 108,117 108,118 108,119 109,120 109,121 110,122 110,123 111,124 111,125 112,126 113,127 113,128 113,129 114,130 115,131 115,132 116,133 117,134 117,135 118,136 119,137 120,138 120,139 121,140 122,141 122,142 123,143 124,144 125,145 125,146 126,147 127,148 128,149 128,150 129,151 130,152 131,153 132,154 132,155 133,156 134,157 135,158 135,159 136,160 137,161 138,162 138,163 139,164 140,165 141,166 141,167 142,168 143,169 143,170 144,171 145,172 145,173 146,174 147,175 147,176 148,177 148,178 149,179 149,180 150,181 150,182 150,183 151,184 151,185 152,186 152,187 153,188 153,189 154,190 154,191 154,192 154,193 155,194 155,195 155,196 156,197 156,198 156,199 156,200 156,201 157,202 157,203 157,204 157,205 157,206 157,207 157,208 157,209 156,210 156,211 83,212 85,213 87,214 89,215 89,216 90,217 91,218 92,219 93,220 94,221 95,222 96,223 96,224 97,225 98,226 99,227 100,228 100,229 101,230 102,231 102,232 103,233 104,234 105,235 105,236 106,237 107,238 108,239 109,240 110,241 111,242 112,243 113,244 114,245 115,246 116,247 117,248 118,249 120,250 121,251 123,252 124,253 126,254 128,255 131,256 134,257 137,258 143,259 155,259 161,258 164,257 167,256 170,255 172,254 173,253 175,252 176,251 178,250 179,249 180,248 181,247 182,246 184,245 185,244 185,243 186,242 187,241 188,240 188,239 189,238 190,237 190,236 191,235 191,234 192,233 193,232 193,231 193,230 194,229 194,228 195,227 195,226 195,225 196,224 196,223 196,222 197,221 197,220 197,219 197,218 197,217 198,216 198,215 198,214 198,213 198,212 198,211 198,210 198,209 198,208 198,207 198,206 198,205 198,204 198,203 198,202 198,201 198,200 198,199 198,198 198,197 197,196 197,195 197,194 197,193 197,192 197,191 196,190 196,189 196,188 196,187 195,186 195,185 195,184 194,183 194,182 194,181 193,180 193,179 193,178 192,177 192,176 192,175 191,174 191,173 190,172 190,171 189,170 189,169 188,168 188,167 187,166 187,165 186,164 186,163 186,162 185,161 184,160 184,159 183,158 183,157 182,156 181,155 181,154 180,153 179,152 179,151 178,150 177,149 177,148 176,147 175,146 174,145 174,144 173,143 172,142 172,141 171,140 170,139 169,138 169,137 168,136 167,135 166,134 165,133 165,132 164,131 163,130 162,129 162,128 161,127 160,126 160,125 159,124 158,123 158,122 157,121 156,120 156,119 155,118 154,117 154,116 153,115 153,114 152,113 152,112 151,111 150,110 150,109 150,108 150,107 149,106 149,105 148,104 148,103 147,102 147,101 147,100 147,99 146,98 146,97 146,96 146,95 145,94 145,93 145,92 145,91 145,90 145,89 218,88 215,87 213,86 212,85 210,84 210,83 209,82 208,81 206,80 206,79 205,78 204,77 203,76 203,75 202,74 201,73 200,72 200,71 199,70 198,69 198,68 197,67 196,66 196,65 195,64 194,63 193,62 192,61 192,60 191,59 190,58 189,57 188,56 187,55 186,54 185,53 184,52 182,51 181,50 179,49 178,48 176,47 174,46 172,45 170,44 166,43 163,42 158,41";

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function parsePts(str) {
    return str.trim().split(/\s+/).map((p) => {
        const [x, y] = p.split(",");
        return { x: +x, y: +y };
    });
}

function gradRGB(t) {
    const stops = [
        [0, 238, 247, 30], [0.12, 210, 235, 38],
        [0.28, 178, 216, 55], [0.45, 150, 205, 78],
        [0.62, 110, 185, 108], [0.78, 72, 168, 128],
        [1, 42, 155, 138],
    ];
    t = Math.max(0, Math.min(1, t));
    for (let i = 0; i < stops.length - 1; i++) {
        if (t <= stops[i + 1][0]) {
            const f = (t - stops[i][0]) / (stops[i + 1][0] - stops[i][0]);
            return [
                Math.round(stops[i][1] + f * (stops[i + 1][1] - stops[i][1])),
                Math.round(stops[i][2] + f * (stops[i + 1][2] - stops[i][2])),
                Math.round(stops[i][3] + f * (stops[i + 1][3] - stops[i][3])),
            ];
        }
    }
    return [42, 155, 138];
}

function getFilledPixels(outerPts, innerPts, step = 4) {
    const off = document.createElement("canvas");
    off.width = 300; off.height = 300;
    const oc = off.getContext("2d");
    oc.beginPath();
    outerPts.forEach((p, i) => (i === 0 ? oc.moveTo(p.x, p.y) : oc.lineTo(p.x, p.y)));
    oc.closePath();
    oc.moveTo(innerPts[0].x, innerPts[0].y);
    innerPts.forEach((p, i) => (i === 0 ? oc.moveTo(p.x, p.y) : oc.lineTo(p.x, p.y)));
    oc.closePath();
    oc.fillStyle = "white";
    oc.fill("evenodd");
    const data = oc.getImageData(0, 0, 300, 300).data;
    const pts = [];
    for (let y = 0; y < 300; y += step) {
        for (let x = 0; x < 300; x += step) {
            if (data[(y * 300 + x) * 4 + 3] > 128) pts.push({ x, y });
        }
    }
    return pts;
}

/* ─────────────────────────────────────────────
   ORBITAL DOT
   Positions are in screen-space (px from top-left).
   Constructor receives cx, cy (screen centre) and
   scale so dots land exactly in viewport centre.
───────────────────────────────────────────── */
class OrbitalDot {
    constructor(tx300, ty300, idx, total, cx, cy, scale) {
        // Convert 300×300 logo coords → screen coords
        this.tx = cx + (tx300 - 150) * scale;
        this.ty = cy + (ty300 - 150) * scale;

        const [r, g, b] = gradRGB((ty300 - 4) / 291);
        this.r = r; this.g = g; this.b = b;
        this.scale = scale;

        this.orbitR = (40 + Math.random() * 80) * scale;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = (0.015 + Math.random() * 0.025) * (Math.random() < 0.5 ? 1 : -1);
        this.delay = (idx / total) * 1200 + Math.random() * 200;
        this.convergence = 0;
        this.convergeSpd = 0.008 + Math.random() * 0.006;

        this.phase = "orbit";
        this.startT = null;
        this.vx = 0; this.vy = 0;
        this.trail = [];
        this.maxTrail = 8;

        this.x = this.tx + Math.cos(this.angle) * this.orbitR;
        this.y = this.ty + Math.sin(this.angle) * this.orbitR;
    }

    update(elapsed) {
        /* orbit while waiting */
        if (this.phase === "orbit") {
            if (!this.startT) this.startT = elapsed;
            if (elapsed - this.startT >= this.delay) this.phase = "converging";
            this.angle += this.speed;
            this.x = this.tx + Math.cos(this.angle) * this.orbitR;
            this.y = this.ty + Math.sin(this.angle) * this.orbitR;
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxTrail) this.trail.shift();
        }

        /* spiral inward */
        if (this.phase === "converging") {
            this.convergence = Math.min(this.convergence + this.convergeSpd, 1);
            this.angle += this.speed * (1 - this.convergence * 0.7);
            this.orbitR *= 0.97;
            const ox = this.tx + Math.cos(this.angle) * this.orbitR;
            const oy = this.ty + Math.sin(this.angle) * this.orbitR;
            const e = 1 - Math.pow(1 - this.convergence, 3);
            this.x = ox + (this.tx - ox) * e;
            this.y = oy + (this.ty - oy) * e;
            this.trail.push({ x: this.x, y: this.y });
            if (this.trail.length > this.maxTrail) this.trail.shift();
            if (this.convergence >= 1 || this.orbitR < 0.5 * this.scale) {
                this.phase = "landed";
                this.x = this.tx; this.y = this.ty;
                this.trail = []; this.orbitR = 0;
            }
        }

        /* gentle breathe */
        if (this.phase === "landed") {
            this.x = this.tx + Math.sin(elapsed * 0.002 + this.tx * 0.005) * 0.5;
            this.y = this.ty + Math.cos(elapsed * 0.0018 + this.ty * 0.005) * 0.5;
        }

        /* scatter */
        if (this.phase === "scatter_init") {
            const ang = Math.random() * Math.PI * 2;
            const spd = (3 + Math.random() * 6) * this.scale;
            this.vx = Math.cos(ang) * spd;
            this.vy = Math.sin(ang) * spd - 3 * this.scale;
            this.phase = "scattering";
        }
        if (this.phase === "scattering") {
            this.x += this.vx; this.y += this.vy;
            this.vy += 0.12 * this.scale; this.vx *= 0.97;
        }
    }

    triggerScatter() {
        if (this.phase === "landed") this.phase = "scatter_init";
    }

    draw(ctx, scatterMs) {
        let alpha = 1;
        if (this.phase === "scattering") alpha = Math.max(0, 1 - scatterMs / 1000);
        if (alpha <= 0) return;

        const isLanded = this.phase === "landed";
        const dotR = (isLanded ? 2.2 : 1.8) * this.scale;

        /* trail */
        if ((this.phase === "orbit" || this.phase === "converging") && this.trail.length > 1) {
            for (let i = 1; i < this.trail.length; i++) {
                const ta = (i / this.trail.length) * 0.28 * alpha;
                ctx.beginPath();
                ctx.moveTo(this.trail[i - 1].x, this.trail[i - 1].y);
                ctx.lineTo(this.trail[i].x, this.trail[i].y);
                ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},${ta})`;
                ctx.lineWidth = this.scale;
                ctx.stroke();
            }
        }

        /* ghost orbit ring */
        if (this.phase === "orbit" && this.orbitR > 4 * this.scale) {
            ctx.beginPath();
            ctx.arc(this.tx, this.ty, this.orbitR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${this.r},${this.g},${this.b},0.055)`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
        }

        /* glow when landed */
        if (isLanded) {
            const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, dotR * 3.5);
            grd.addColorStop(0, `rgba(${this.r},${this.g},${this.b},${0.15 * alpha})`);
            grd.addColorStop(1, `rgba(${this.r},${this.g},${this.b},0)`);
            ctx.beginPath();
            ctx.arc(this.x, this.y, dotR * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
        }

        /* core dot */
        ctx.beginPath();
        ctx.arc(this.x, this.y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${alpha})`;
        ctx.fill();

        /* white highlight */
        if (isLanded || this.phase === "converging") {
            ctx.beginPath();
            ctx.arc(this.x - dotR * 0.25, this.y - dotR * 0.25, dotR * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${0.5 * alpha})`;
            ctx.fill();
        }
    }
}

/* ─────────────────────────────────────────────
   COMPONENT
   Canvas is position:fixed, inset:0 — fills the
   entire screen with no box or container clipping.
   S is centred in the viewport and scales with
   the window size automatically.
───────────────────────────────────────────── */
export default function SavorkaPreloader({ onComplete }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const dotsRef = useRef([]);
    const phaseRef = useRef("assemble");
    const scatterTsRef = useRef(null);
    const startTsRef = useRef(null);

    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [brandVisible, setBrandVisible] = useState(false);

    /* Resize canvas to fill full viewport */
    const resize = () => {
        const c = canvasRef.current;
        if (!c) return;
        c.width = window.innerWidth;
        c.height = window.innerHeight;
    };

    /* Build dots centred + scaled to viewport */
    const buildDots = () => {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const outer = parsePts(OUTER_PTS);
        const inner = parsePts(INNER_PTS);
        const targets = getFilledPixels(outer, inner, 7);

        // S takes ~40% of the shorter viewport dimension
        const scale = Math.min(vw, vh) * 0.40 / 300;
        const cx = vw / 2;
        const cy = vh / 2;

        targets.sort((a, b) =>
            Math.hypot(a.x - 150, a.y - 150) - Math.hypot(b.x - 150, b.y - 150)
        );

        const total = targets.length;
        dotsRef.current = targets.map(
            (t, i) => new OrbitalDot(t.x, t.y, i, total, cx, cy, scale)
        );
    };

    useEffect(() => {
        resize();
        buildDots();
        const onResize = () => { resize(); buildDots(); };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    /* Progress */
    useEffect(() => {
        let val = 0;
        const id = setInterval(() => {
            val = Math.min(val + Math.random() * 4 + 1.5, 100);
            setProgress(Math.min(Math.round(val), 100));
            if (val >= 100) clearInterval(id);
        }, 180);
        return () => clearInterval(id);
    }, []);

    /* Phases */
    useEffect(() => {
        const t1 = setTimeout(() => setBrandVisible(true), 2200);
        const t2 = setTimeout(() => { phaseRef.current = "scatter"; }, 4200);
        const t3 = setTimeout(() => setVisible(false), 5400);
        const t4 = setTimeout(() => onComplete?.(), 6100);
        return () => [t1, t2, t3, t4].forEach(clearTimeout);
    }, [onComplete]);

    /* Animation loop */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        function frame(ts) {
            if (!startTsRef.current) startTsRef.current = ts;
            const elapsed = ts - startTsRef.current;
            const isScatter = phaseRef.current === "scatter";
            if (isScatter && !scatterTsRef.current) scatterTsRef.current = ts;
            const scatterMs = scatterTsRef.current ? ts - scatterTsRef.current : 0;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dotsRef.current.forEach((d) => {
                if (isScatter) d.triggerScatter();
                d.update(elapsed);
                d.draw(ctx, scatterMs);
            });

            animRef.current = requestAnimationFrame(frame);
        }

        animRef.current = requestAnimationFrame(frame);
        return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,                 /* covers full viewport */
                        zIndex: 9999,
                        background: "#000",
                        overflow: "hidden",
                        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                    }}
                >
                    {/* Full-screen grid */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), " +
                            "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }} />

                    {/* Centred glow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        style={{
                            position: "absolute",
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "55vmin", height: "55vmin",
                            borderRadius: "50%", pointerEvents: "none",
                            background:
                                "radial-gradient(ellipse at center, rgba(150,200,87,0.12) 0%, transparent 70%)",
                        }}
                    />

                    {/* THE CANVAS — position:absolute, inset:0, full viewport, no clipping */}
                    <canvas
                        ref={canvasRef}
                        style={{
                            position: "absolute",
                            top: 0, left: 0,
                            width: "100%",
                            height: "100%",
                            display: "block",
                        }}
                    />

                    {/* Brand + progress — absolutely centred below the S */}
                    <div style={{
                        position: "absolute",
                        top: "50%", left: 0, right: 0,
                        marginTop: "22vmin",          /* sits below the S */
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 0,
                    }}>
                        {/* SAVORKA letters */}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                            {/* SAVORKA */}
                            <div style={{ display: "flex", gap: 4 }}>
                                {"SAVORKA".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={brandVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.05,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        style={{
                                            fontSize: 32,
                                            fontWeight: 800,
                                            letterSpacing: "0.25em",
                                            color: "#fff",
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>

                            {/* LINE + SOLAR */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    // gap: 2,
                                    marginTop: 6,
                                }}
                            >

                                {/* SOLAR BOX */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={brandVisible ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    style={{
                                        position: "relative",
                                        display: "inline-block",
                                        padding: "6px 34px",
                                        // borderTopLeftRadius: "10px",
                                        borderTopRightRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        // borderBottomRightRadius: "10px",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* 🌊 Animated gradient background */}
                                    <motion.div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            zIndex: 0,
                                            background:
                                                "linear-gradient(90deg, #eef71e, #35a28b)",
                                            backgroundSize: "250% auto",
                                        }}
                                        animate={
                                            brandVisible
                                                ? { backgroundPosition: ["0% center", "250% center"] }
                                                : {}
                                        }
                                        transition={{
                                            duration: 4,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }}
                                    />

                                    {/* ✨ Soft glow */}
                                    <motion.div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: 6,
                                            boxShadow: "0 0 20px rgba(120,200,120,0.25)",
                                            zIndex: 0,
                                        }}
                                        animate={
                                            brandVisible
                                                ? { opacity: [0.3, 0.6, 0.3] }
                                                : {}
                                        }
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* 💡 LIGHT SWEEP */}
                                    <motion.div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: "-40%",
                                            width: "40%",
                                            height: "100%",
                                            zIndex: 1,
                                            background:
                                                "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                                            transform: "skewX(-20deg)",
                                            pointerEvents: "none",
                                        }}
                                        animate={
                                            brandVisible
                                                ? { left: ["-40%", "120%"] }
                                                : {}
                                        }
                                        transition={{
                                            duration: 1.8,
                                            ease: "easeInOut",
                                            delay: 0.8,
                                        }}
                                    />

                                    {/* 🔤 Text */}
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 4,
                                            position: "relative",
                                            zIndex: 2,
                                        }}
                                    >
                                        {"SOLAR".split("").map((char, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={
                                                    brandVisible
                                                        ? {
                                                            opacity: 1,
                                                            y: [20, -4, 0],
                                                        }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 0.8,
                                                    delay: i * 0.06,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 800,
                                                    letterSpacing: "0.38em",
                                                    color: "#fff",
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* RIGHT LINE */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={brandVisible ? { scaleX: 1, opacity: 1 } : {}}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.7,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    style={{
                                        width: 120,
                                        height: 3, // base thickness
                                        transformOrigin: "left",
                                        position: "relative",
                                        overflow: "hidden",

                                        // 🎯 Gradient makes it look thick → thin
                                        background:
                                            "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0) 100%)",
                                    }}
                                />
                            </div>
                        </div>
                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{ marginTop: 20, width: 200, position: "relative" }}
                        >
                            <div style={{
                                height: 1,
                                background: "rgba(255,255,255,0.07)",
                                borderRadius: 1,
                                overflow: "visible",
                                position: "relative",
                            }}>
                                <motion.div
                                    animate={{ scaleX: progress / 100 }}
                                    transition={{ ease: "easeOut", duration: 0.25 }}
                                    style={{
                                        height: "100%",
                                        background: "linear-gradient(90deg, #eef71e, #35a28b)",
                                        borderRadius: 1,
                                        transformOrigin: "left",
                                    }}
                                />
                                <motion.div
                                    animate={{ left: `calc(${progress}% - 3.5px)` }}
                                    transition={{ ease: "easeOut", duration: 0.25 }}
                                    style={{
                                        position: "absolute", top: -3,
                                        width: 7, height: 7,
                                        borderRadius: "50%",
                                        background: "#96c857",
                                        boxShadow: "0 0 8px rgba(150,200,87,0.8)",
                                    }}
                                />
                            </div>
                            <div style={{
                                marginTop: 10, textAlign: "center",
                                color: "rgba(255,255,255,0.25)",
                                fontSize: 10, letterSpacing: "0.22em",
                            }}>
                                {progress}%
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}