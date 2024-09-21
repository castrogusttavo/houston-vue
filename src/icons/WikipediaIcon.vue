
<template>
  <Icon :iconName="'wikipedia'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WikipediaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wikipedia'
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
