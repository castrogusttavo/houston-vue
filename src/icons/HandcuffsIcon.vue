
<template>
  <Icon :iconName="'handcuffs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandcuffsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'handcuffs'
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
