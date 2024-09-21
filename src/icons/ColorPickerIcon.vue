
<template>
  <Icon :iconName="'color-picker'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ColorPickerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'color-picker'
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
