'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PerformanceView from './performance.view';
import { loadData } from './performance.reducer';

function mapStateToProps({ performanceReducer }) {
    return {
        isLoading: performanceReducer.isLoading,
        data: performanceReducer.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            loadData
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceView);
