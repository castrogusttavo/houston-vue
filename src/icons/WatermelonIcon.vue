
<template>
  <Icon :iconName="'watermelon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WatermelonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'watermelon'
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
