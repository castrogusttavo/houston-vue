
<template>
  <Icon :iconName="'repeat-one-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepeatOne02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repeat-one-02'
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
