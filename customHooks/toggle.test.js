import '@testing-library/jest-dom'
import { renderHook, act} from '@testing-library/react'
import  useToggle  from './toggle'

describe('toggle true and false', () => {
    it('toggle true', () => {
        const { result } = renderHook(useToggle);
        expect(result.current.toggle).toBe(false);

        act(() => {
            result.current.toggleOnOff();
        });

        expect(result.current.toggle).toBe(true);
    })
    it('toggle false', () => {
        const { result } = renderHook(useToggle);
        expect(result.current.toggle).toBe(false);

        act(() => {
            result.current.toggleOnOff();
        })

        expect(result.current.toggle).toBe(true)

        act(() => {
            result.current.toggleOnOff();
        })

        expect(result.current.toggle).toBe(false)
    })
})