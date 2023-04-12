import SolutionAnim from '@/components/Solution/SolutionAnim';
import SolutionGames from '@/components/Solution/SolutionGames';
import SolutionHero from '@/components/Solution/SolutionHero';
import SolutionSteps from '@/components/Solution/SolutionSteps';
import React from 'react';

const solution = () => {
    return (
        <div>
            <SolutionHero/>
            <SolutionAnim/>
            <SolutionSteps/>
            <SolutionGames/>
        </div>
    );
};

export default solution;