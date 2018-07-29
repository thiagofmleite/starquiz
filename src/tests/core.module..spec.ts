import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../app/core/core.module';
import { HeaderComponent } from '../app/core/header/header.component';
import { TimerComponent } from '../app/core/header/timer/timer.component';

describe('Core Module', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CoreModule,
            ]
        }).compileComponents();
    }));

    describe('HeaderComponent', () => {
        it('should create the header', async(() => {
            const fixture = TestBed.createComponent(HeaderComponent);
            const header = fixture.debugElement.componentInstance;
            expect(header).toBeTruthy();
        }));
    });

    describe('TimerComponent', () => {
        it('should create the timer', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            const timer = fixture.debugElement.componentInstance;
            expect(timer).toBeTruthy();
        }));
        it('should return 00 when 60 seconds is passed', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getSeconds(60000)).toBe('00');
        }));
        it('should return 00 when negative seconds is passed', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getSeconds(-1)).toBe('00');
        }));
        it('should return when negative minutes is passed', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getMinutes(-1)).toBe('00');
        }));
        it('should return 1:59', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getTimer(119000)).toBe('01:59');
        }));
        it('should return 1:30', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getTimer(90000)).toBe('01:30');
        }));
        it('should return 00:59', async(() => {
            const fixture = TestBed.createComponent(TimerComponent);
            expect(fixture.componentInstance.getTimer(59000)).toBe('00:59');
        }));
    });

});
