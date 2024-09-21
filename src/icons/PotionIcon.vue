
<template>
  <Icon :iconName="'potion'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PotionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'potion'
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
