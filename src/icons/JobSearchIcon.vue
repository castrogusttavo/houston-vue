
<template>
  <Icon :iconName="'job-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JobSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'job-search'
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
