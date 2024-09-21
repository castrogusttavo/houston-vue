
<template>
  <Icon :iconName="'ski'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SkiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ski'
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
