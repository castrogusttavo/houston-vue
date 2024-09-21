
<template>
  <Icon :iconName="'tram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tram'
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
