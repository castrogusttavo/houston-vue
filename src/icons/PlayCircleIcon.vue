
<template>
  <Icon :iconName="'play-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlayCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'play-circle'
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
