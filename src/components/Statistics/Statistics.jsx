import React from 'react';
import s from './Statistics.module.css';
import data from '../../data/data.json';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul class="stat-list">
        <li class="item">
          <span class="label">{stats.label}</span>
          <span class="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
}
