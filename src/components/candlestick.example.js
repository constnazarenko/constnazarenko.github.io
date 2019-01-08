import React from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    VerticalBarSeries,
    Crosshair,
} from 'react-vis';
import './candlestick.scss';

const realData = {
    data: [
        {
            id: 'VOICE',
            type: 'aggregated-usages',
            attributes: {
                validityPeriod: {
                    startDate: '2018-07-01T00:19:17Z',
                    endDate: '2018-08-01T00:19:17Z',
                },
                totalNonMonetaryImpact: {
                    amount: 100,
                    unitOfMeasure: 'SECONDS',
                },
                totalUsage: {
                    amount: 100,
                    currency: null,
                    unitOfMeasure: 'SECONDS',
                },
                totalMonetaryImpact: {
                    amount: 100,
                    currency: 'UAH',
                },
                daily: {
                    monetary: {
                        currency: 'UAH',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                            { x: '27.06', y: 3 },
                            { x: '28.06', y: 2 },
                            { x: '29.06', y: 1 },
                            { x: '30.06', y: 2 },
                            { x: '31.06', y: 1 },
                            { x: '32.06', y: 2 },
                            { x: '33.06', y: 12 },
                            { x: '34.06', y: 2 },
                            { x: '35.06', y: 1 },
                            { x: '36.06', y: 2 },
                            { x: '37.06', y: 1 },
                            { x: '38.06', y: 2 },
                        ],
                    },
                    nonMonetary: {
                        currency: 'SECONDS',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                        ],
                    },
                    usage: {
                        currency: 'SECONDS',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                        ],
                    },
                },
                category: 'VOICE',
            },
            links: {
                self: 'http://localhost:51535/omnichannel-api/api/v0/aggregated-usages/VOICE',
            },
        },
        {
            id: 'SMS',
            type: 'aggregated-usages',
            attributes: {
                validityPeriod: {
                    startDate: '2018-07-01T00:19:17Z',
                    endDate: '2018-08-01T00:19:17Z',
                },
                totalNonMonetaryImpact: {
                    amount: 200,
                    unitOfMeasure: 'SMS',
                },
                totalUsage: {
                    amount: 200,
                    currency: null,
                    unitOfMeasure: 'SMS',
                },
                totalMonetaryImpact: {
                    amount: 200,
                    currency: 'UAH',
                },
                daily: {
                    monetary: {
                        currency: 'UAH',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                            { x: '27.06', y: 23 },
                            { x: '28.06', y: 2 },
                            { x: '29.06', y: 10 },
                            { x: '30.06', y: 2 },
                            { x: '31.06', y: 5 },
                            { x: '32.06', y: 2 },
                            { x: '33.06', y: 7 },
                            { x: '34.06', y: 5 },
                            { x: '35.06', y: 1 },
                            { x: '36.06', y: 4 },
                            { x: '37.06', y: 3 },
                            { x: '38.06', y: 2 },
                        ],
                    },
                    nonMonetary: {
                        currency: 'SMS',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 3 },
                        ],
                    },
                    usage: {
                        currency: 'SMS',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 3 },
                            { x: '26.06', y: 4 },
                        ],
                    },
                },
                category: 'SMS',
            },
            links: {
                self: 'http://localhost:51535/omnichannel-api/api/v0/aggregated-usages/SMS',
            },
        },
        {
            id: 'PERIODIC_CHARGES',
            type: 'aggregated-usages',
            attributes: {
                validityPeriod: {
                    startDate: '2018-07-01T00:19:17Z',
                    endDate: '2018-08-01T00:19:17Z',
                },
                totalNonMonetaryImpact: [],
                totalUsage: [],
                totalMonetaryImpact: [
                    {
                        amount: 15.477793,
                        currency: 'UAH',
                    },
                ],
                daily: {
                    monetary: {
                        currency: 'UAH',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                            { x: '27.06', y: 23 },
                            { x: '28.06', y: 2 },
                            { x: '29.06', y: 10 },
                            { x: '30.06', y: 2 },
                            { x: '31.06', y: 5 },
                            { x: '32.06', y: 2 },
                            { x: '33.06', y: 7 },
                            { x: '34.06', y: 5 },
                            { x: '35.06', y: 1 },
                            { x: '36.06', y: 4 },
                            { x: '37.06', y: 3 },
                            { x: '38.06', y: 2 },
                        ],
                    },
                    nonMonetary: {
                        currency: 'POINTS',
                        data: [],
                    },
                    usage: {
                        currency: 'POINTS',
                        data: [],
                    },
                },
                category: 'PERIODIC_CHARGES',
            },
            links: {
                self: 'http://localhost:51535/omnichannel-api/api/v0/aggregated-usages/PERIODIC_CHARGES',
            },
        },
        {
            id: 'NON_PERIODIC_CHARGES',
            type: 'aggregated-usages',
            attributes: {
                validityPeriod: {
                    startDate: '2018-07-01T00:19:17Z',
                    endDate: '2018-08-01T00:19:17Z',
                },
                totalNonMonetaryImpact: [],
                totalUsage: [],
                totalMonetaryImpact: [
                    {
                        amount: 17,
                        currency: 'UAH',
                    },
                ],
                daily: {
                    monetary: {
                        currency: 'UAH',
                        y: { max: 12, min: 1 },
                        data: [
                            { x: '25.06', y: 1 },
                            { x: '26.06', y: 2 },
                            { x: '27.06', y: 23 },
                            { x: '28.06', y: 2 },
                            { x: '29.06', y: 10 },
                            { x: '30.06', y: 2 },
                            { x: '31.06', y: 5 },
                            { x: '32.06', y: 2 },
                            { x: '33.06', y: 7 },
                            { x: '34.06', y: 5 },
                            { x: '35.06', y: 1 },
                            { x: '36.06', y: 4 },
                            { x: '37.06', y: 3 },
                            { x: '38.06', y: 2 },
                        ],
                    },
                    nonMonetary: {
                        currency: 'POINTS',
                        data: [],
                    },
                    usage: {
                        currency: 'POINTS',
                        data: [],
                    },
                },
                category: 'NON_PERIODIC_CHARGES',
            },
            links: {
                self: 'http://localhost:51535/omnichannel-api/api/v0/aggregated-usages/NON_PERIODIC_CHARGES',
            },
        },
    ],
};


export default class Example extends React.Component {
    render () {
        return (
            <SummaryTable />
        );
    }
}

class SummaryTable extends React.Component {
    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Usage</th>
                        <th>Impact (units)</th>
                        <th>Impact ($)</th>
                        <th />
                    </tr>
                </thead>
                {
                    realData.data.map( ( d ) =>
                        <SummaryRow data={ d } key={ d.id } />
                    )
                }

            </table>
        );
    }
}

class SummaryRow extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {
            revealed: false,
            type: true,
        };

        this.toggleChart = this.toggleChart.bind( this );
        this.toggleType = this.toggleType.bind( this );
    }

    toggleChart () {
        this.setState( { revealed: !this.state.revealed } );
    }

    toggleType ( type ) {
        this.setState( { type } );
    }

    render () {
        const { category, daily, totalNonMonetaryImpact, totalUsage, totalMonetaryImpact } = this.props.data.attributes;
        const { revealed, type } = this.state;
        const chartClasses = ['chart-row'];
        if ( revealed ) {
            chartClasses.push( 'revealed' );
        }
        return (
            <tbody>
                <tr>
                    <td>{ category }</td>
                    <td>
                        { totalNonMonetaryImpact.amount }
                        { totalNonMonetaryImpact.currency
                            ? totalNonMonetaryImpact.currency
                            : totalNonMonetaryImpact.unitOfMeasure }
                    </td>
                    <td>
                        { totalUsage.amount }
                        { totalUsage.currency
                            ? totalUsage.currency
                            : totalUsage.unitOfMeasure }
                    </td>
                    <td>
                        { totalMonetaryImpact.amount }
                        { totalMonetaryImpact.currency
                            ? totalMonetaryImpact.currency
                            : totalMonetaryImpact.unitOfMeasure }
                    </td>
                    <td><a onClick={ this.toggleChart }>{ revealed ? '-' : '+' }</a></td>
                </tr>
                { revealed ? <tr className={ chartClasses.join( ' ' ) }>
                    <td colSpan="5">
                        <div>
                            <label>
                                <input
                                    defaultChecked
                                    name={ category + '_chartType' }
                                    onClick={ () => this.toggleType( true ) }
                                    type="radio"
                                /> Usage</label>
                            <label>
                                <input
                                    name={ category + '_chartType' }
                                    onClick={ () => this.toggleType( false ) }
                                    type="radio"
                                /> Impact</label>
                        </div>
                        <BarChart
                            currency={ type ? daily.usage.currency : daily.monetary.currency }
                            daily={ type ? daily.usage.data : daily.monetary.data }
                        />
                    </td>
                </tr> : null }
            </tbody>
        );
    }
}


class BarChart extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = { crosshairValues: [] };
        this.onNearestX = this.onNearestX.bind( this );
        this.onMouseLeave = this.onMouseLeave.bind( this );
    }

    onMouseLeave () {
        this.setState( { crosshairValues: [] } );
    }
    onNearestX ( value, { index } ) {
        this.setState( { crosshairValues: [this.props.daily[index]] } );
    }

    render () {
        const { currency, daily } = this.props;
        return (
            <XYPlot
                height={ 300 }
                margin={ { left: 70 } }
                onMouseLeave={ this.onMouseLeave }
                width={ daily.length * 50 + 100 }
                xType="ordinal"
            >
                <HorizontalGridLines />
                <XAxis tickLabelAngle={ -45 } />
                <YAxis tickFormat={ v => `${v} ${currency}` } title={ currency } />
                <VerticalBarSeries
                    color="blue"
                    colorType="literal"
                    curve={ 'curveMonotoneX' }
                    data={ daily }
                    onNearestX={ this.onNearestX }
                    opacity="0.6"
                    stroke="blue"
                />
                <Crosshair
                    itemsFormat={ ( point ) => [{ title: currency, value: point[0].y }] }
                    titleFormat={ ( point ) => {
                        return { title: point[0].x, value: null };
                    } }
                    values={ this.state.crosshairValues }
                />
            </XYPlot>
        );
    }
}
