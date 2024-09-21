
<template>
  <Icon :iconName="'shuffle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShuffleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shuffle'
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
