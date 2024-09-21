
<template>
  <Icon :iconName="'heart-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeartRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heart-remove'
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
