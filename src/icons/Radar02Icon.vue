
<template>
  <Icon :iconName="'radar-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Radar02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radar-02'
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
