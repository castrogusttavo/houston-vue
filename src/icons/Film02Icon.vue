
<template>
  <Icon :iconName="'film-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Film02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'film-02'
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
