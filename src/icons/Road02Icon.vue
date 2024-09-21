
<template>
  <Icon :iconName="'road-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Road02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'road-02'
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
