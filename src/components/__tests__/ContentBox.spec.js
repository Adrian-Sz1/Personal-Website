import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ContentBox from '@/components/ContentBox.vue';
import { sortTechnologies } from '@/components/technologyUtils.js';

vi.mock('@/components/technologyUtils.js', () => ({
  sortTechnologies: vi.fn(),
}));

describe('ContentBox', () => {
    beforeEach(() => { sortTechnologies.mockReset(); });
    
    it('renders props correctly', async () => {
    const props = {
        urlLink: 'https://example.com',
        dateRange: '2023-2024',
        header: 'My Project',
        subHeader: 'A cool project',
        desc: 'This is a description.',
        technologyList: ['Vue', 'React', 'Node.js'],
    };

    const wrapper = mount(ContentBox, { props });

    expect(wrapper.find('a').attributes('href')).toBe(props.urlLink);
    expect(wrapper.find('#date-container').text()).toBe(props.dateRange);
    expect(wrapper.find('h2').text()).toBe(props.header);
    expect(wrapper.find('h3').text()).toBe(props.subHeader);
    expect(wrapper.find('p').text()).toBe(props.desc);
    });

    it('calls sortTechnologies with the correct props', async () => {
    const props = {
        header: 'My Project',
        desc: 'This is a description.',
        technologyList: ['Vue', 'React', 'Node.js'],
    };

    mount(ContentBox, { props });

    expect(sortTechnologies).toHaveBeenCalledWith(props.technologyList);
    });

    it('renders technology list correctly', async () => {
    const props = {
        header: 'My Project',
        desc: 'This is a description.',
        technologyList: ['Vue', 'React', 'Node.js'],
    };

    const mockSortedList = ['Node.js', 'React', 'Vue'];
    sortTechnologies.mockReturnValue(mockSortedList);

    const wrapper = mount(ContentBox, { props });

    const listItems = wrapper.findAll('.mint-pill-medium');
    expect(listItems.length).toBe(props.technologyList.length);

    listItems.forEach((item, index) => {
        expect(item.text()).toBe(mockSortedList[index]);
    });
    });

    it('does not render link if urlLink is not provided', async () => {
        const props = {
            header: 'My Project',
            desc: 'This is a description.',
            technologyList: ['Vue', 'React', 'Node.js'],
        };

        const wrapper = mount(ContentBox, {props});

        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('handles empty technology list', async () => {
    const props = {
        header: 'My Project',
        desc: 'This is a description.',
        technologyList: [],
    };

    const wrapper = mount(ContentBox, { props });

    expect(wrapper.findAll('.mint-pill-medium').length).toBe(0);
    });

});