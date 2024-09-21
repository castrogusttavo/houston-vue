
<template>
  <Icon :iconName="'school-report-card'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolReportCardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-report-card'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
