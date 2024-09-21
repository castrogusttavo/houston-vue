
<template>
  <Icon :iconName="'pensive'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PensiveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pensive'
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
