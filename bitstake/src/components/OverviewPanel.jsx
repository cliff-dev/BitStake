'use client';

import React from 'react';
import StakingOverview from './StakingOverview';

export default function OverviewPanel({ onStakeClick }) {
  return (
    <div className="flex flex-col gap-6">
      <StakingOverview onStakeClick={onStakeClick} />
    </div>
  );
}
