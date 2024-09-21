
<template>
  <Icon :iconName="'moon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon'
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
