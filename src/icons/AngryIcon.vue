
<template>
  <Icon :iconName="'angry'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AngryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'angry'
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
