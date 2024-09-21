
<template>
  <Icon :iconName="'greek-helmet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GreekHelmetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'greek-helmet'
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
