
<template>
  <Icon :iconName="'knives'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KnivesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'knives'
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
