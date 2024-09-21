
<template>
  <Icon :iconName="'kidneys'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KidneysIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kidneys'
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
