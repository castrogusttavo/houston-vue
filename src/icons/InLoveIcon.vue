
<template>
  <Icon :iconName="'in-love'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InLoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'in-love'
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
