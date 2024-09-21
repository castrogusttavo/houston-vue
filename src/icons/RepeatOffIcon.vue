
<template>
  <Icon :iconName="'repeat-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepeatOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repeat-off'
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
