
<template>
  <Icon :iconName="'mosque-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mosque02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mosque-02'
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
