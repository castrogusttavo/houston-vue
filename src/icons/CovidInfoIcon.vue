
<template>
  <Icon :iconName="'covid-info'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CovidInfoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'covid-info'
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
