
<template>
  <Icon :iconName="'play'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play'
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
