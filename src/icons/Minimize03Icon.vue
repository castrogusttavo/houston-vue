
<template>
  <Icon :iconName="'minimize-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Minimize03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minimize-03'
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
