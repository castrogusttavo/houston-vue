
<template>
  <Icon :iconName="'kayak'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KayakIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kayak'
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
