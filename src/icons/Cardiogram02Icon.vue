
<template>
  <Icon :iconName="'cardiogram-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cardiogram02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cardiogram-02'
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
