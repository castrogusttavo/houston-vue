
<template>
  <Icon :iconName="'banana'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BananaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'banana'
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
