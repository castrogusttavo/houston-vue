
<template>
  <Icon :iconName="'happy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HappyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'happy'
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
