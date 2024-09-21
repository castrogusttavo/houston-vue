
<template>
  <Icon :iconName="'test-tube'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TestTubeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'test-tube'
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
