
<template>
  <Icon :iconName="'mountain'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MountainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mountain'
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
