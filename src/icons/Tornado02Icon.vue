
<template>
  <Icon :iconName="'tornado-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tornado02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tornado-02'
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
