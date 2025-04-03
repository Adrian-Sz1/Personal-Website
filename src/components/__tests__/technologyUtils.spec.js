import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sortTechnologies } from '../technologyUtils';

const mockTechnologies = {
  FRAMEWORKS: { VUE: 'Vue.js', REACT: 'React' },
  LANGS: { JAVASCRIPT: 'JavaScript', PYTHON: 'Python' },
  DATABASES: { MONGODB: 'MongoDB', SQL_SERVER: 'Microsoft SQL Server' },
  BUILD_TOOLS: { WEBPACK: 'Webpack', NPM: 'npm' },
  DEVOPS_TOOLS: { DOCKER: 'Docker', GIT: 'Git' },
  TESTING: { JEST: 'Jest', CYPRESS: 'Cypress' },
  MONITORING: { GRAFANA: 'Grafana', PROMETHEUS: 'Prometheus' },
  ARCHITECTURE: { MICROSERVICES: 'Microservices', MVVM: 'MVVM' },
  OTHER: { NODEJS: 'Node.js', TYPESCRIPT: 'TypeScript' },
};

describe('sortTechnologies', () => {

  it('should handle an empty array', () => {
    const technologies = [];
    const sortedTechnologies = sortTechnologies(technologies, mockTechnologies);
    expect(sortedTechnologies).toEqual([]);
  });

  it('should handle a list of technologies', () => {
    const technologies = [
      'Vue.js',
      'Microservices',
      'Python',
      'Webpack',
      'MongoDB',
      'React',
      'Microsoft SQL Server',
      'npm',
      'Docker',
      'Jest',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Cypress',
      'Git',
      'Grafana',
      'Prometheus',
      'MVVM',
    ];
    const resultingOrder = sortTechnologies(technologies, mockTechnologies);
    const expectedOrder = [
        'Vue.js',
        'React',
        'Python',
        'JavaScript',
        'MongoDB',
        'Microsoft SQL Server',
        'Webpack',
        'npm',
        'Docker',
        'Git',
        'Jest',
        'Cypress',
        'Grafana',
        'Prometheus',
        'Microservices',
        'MVVM',
        'Node.js',
        'TypeScript',
    ];
    expect(resultingOrder).toEqual(expectedOrder)
  });
});