import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TechnologyList from '@/components/TechnologyList.vue';

describe('TechnologyList', () => {
  
  describe('Rendering', () => {
    it('renders a <ul> element as the container', async () => {
      const wrapper = mount(TechnologyList, { props: { technologies: ['Vue'] } });
      expect(wrapper.find('ul#skills-container').exists()).toBe(true);
    });
  
    it('renders an element with the class "mint-pill-medium" for each technology', async () => {
      const technologies = ['Vue', 'React', 'Angular'];
      const wrapper = mount(TechnologyList, { props: { technologies } });
      const listItems = wrapper.findAll('li.mint-pill-medium');
      expect(listItems.length).toBe(technologies.length);
  
      listItems.forEach((item, index) => {
        expect(item.text()).toBe(technologies[index]);
      });
    });
  
    it('renders the technology text within each <li> element', async () => {
      const technologies = ['JavaScript', 'HTML', 'CSS'];
      const wrapper = mount(TechnologyList, { props: { technologies } });
      const listItems = wrapper.findAll('li');
      listItems.forEach((item, index) => {
        expect(item.text()).toBe(technologies[index]);
      });
    });
  
    it('renders an empty <ul> when the technologies prop is empty', async () => {
      const wrapper = mount(TechnologyList, { props: { technologies: [] } });
      expect(wrapper.find('ul#skills-container').exists()).toBe(true);
      expect(wrapper.findAll('li').length).toBe(0);
    });
  });

  describe('[Prop] technologies', () => {
    it('exists and has a validator function', () => {
      expect(TechnologyList.props).toHaveProperty('technologies');
      expect(TechnologyList.props.technologies).toHaveProperty('validator');
      expect(TechnologyList.props.technologies.validator).toBeTypeOf('function');
    });

    describe('valid array of strings', () => {
      const validator = TechnologyList.props.technologies.validator;

      it('should return true for a basic array of strings', () => {
        expect(validator(['vue', 'react', 'angular'])).toBe(true);
      });

      it('should return true for an array with a single string', () => {
        expect(validator(['svelte'])).toBe(true);
      });

      it('should return true for an empty array', () => {
        expect(validator([])).toBe(true);
      });
    });

    describe('invalid array of strings', () => {
      const validator = TechnologyList.props.technologies.validator;

      it('should return false for an array containing a number', () => {
        expect(validator(['vue', 123, 'angular'])).toBe(false);
      });

      it('should return false for an array containing a boolean', () => {
        expect(validator(['vue', true, 'angular'])).toBe(false);
      });

      it('should return false for an array containing null', () => {
        expect(validator(['vue', null, 'angular'])).toBe(false);
      });

      it('should return false for an array containing undefined', () => {
        expect(validator(['vue', undefined, 'angular'])).toBe(false);
      });

      it('should return false for an array containing an object', () => {
        expect(validator(['vue', {}, 'angular'])).toBe(false);
      });
    });

    describe('non-array values', () => {
      const validator = TechnologyList.props.technologies.validator;

      it('should return false for a string', () => {
        expect(validator('not an array')).toBe(false);
      });

      it('should return false for null', () => {
        expect(validator(null)).toBe(false);
      });

      it('should return false for undefined', () => {
        expect(validator(undefined)).toBe(false);
      });

      it('should return false for an object', () => {
        expect(validator({})).toBe(false);
      });

      it('should return false for a number', () => {
        expect(validator(123)).toBe(false);
      });

      it('should return false for a boolean', () => {
        expect(validator(true)).toBe(false);
      });

      it('should return false for a function', () => {
        expect(validator(() => {})).toBe(false);
      });
    });
  });
});