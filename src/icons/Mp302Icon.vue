
<template>
  <Icon :iconName="'mp-3-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mp302Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mp-3-02'
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
