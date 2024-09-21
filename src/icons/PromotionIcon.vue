
<template>
  <Icon :iconName="'promotion'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PromotionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'promotion'
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
