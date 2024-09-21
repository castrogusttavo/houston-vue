
<template>
  <Icon :iconName="'gift'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GiftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gift'
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
