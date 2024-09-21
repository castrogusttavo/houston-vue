
<template>
  <Icon :iconName="'setting-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Setting06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'setting-06'
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
