
<template>
  <Icon :iconName="'database'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DatabaseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'database'
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
