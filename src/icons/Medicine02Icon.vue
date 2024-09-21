
<template>
  <Icon :iconName="'medicine-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Medicine02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medicine-02'
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
